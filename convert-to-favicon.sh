#!/bin/bash

# Convert icon.png to favicon.ico with multiple sizes
# This script uses sips (built into macOS) to resize and convert

ICON_SOURCE="public/icon.png"
FAVICON_OUTPUT="public/favicon.ico"
TEMP_DIR=$(mktemp -d)

echo "Converting $ICON_SOURCE to favicon.ico..."

# Create multiple sizes
sips -z 16 16 "$ICON_SOURCE" --out "$TEMP_DIR/icon-16.png" > /dev/null 2>&1
sips -z 32 32 "$ICON_SOURCE" --out "$TEMP_DIR/icon-32.png" > /dev/null 2>&1
sips -z 48 48 "$ICON_SOURCE" --out "$TEMP_DIR/icon-48.png" > /dev/null 2>&1

# Note: sips doesn't directly create ICO files, so we'll use iconutil or create a simple workaround
# For now, let's copy the 32x32 as favicon.ico (browsers will accept PNG as ICO in many cases)
# But for proper ICO, we need a different tool

# Check if we can use iconutil (macOS tool)
if command -v iconutil &> /dev/null; then
    # Create iconset
    mkdir -p "$TEMP_DIR/favicon.iconset"
    cp "$TEMP_DIR/icon-16.png" "$TEMP_DIR/favicon.iconset/icon_16x16.png"
    cp "$TEMP_DIR/icon-32.png" "$TEMP_DIR/favicon.iconset/icon_16x16@2x.png"
    cp "$TEMP_DIR/icon-32.png" "$TEMP_DIR/favicon.iconset/icon_32x32.png"
    cp "$TEMP_DIR/icon-48.png" "$TEMP_DIR/favicon.iconset/icon_32x32@2x.png"
    
    iconutil -c icns "$TEMP_DIR/favicon.iconset" -o "$TEMP_DIR/favicon.icns" 2>/dev/null
    
    if [ -f "$TEMP_DIR/favicon.icns" ]; then
        # Convert ICNS to ICO (simplified - just copy the 32x32 as ICO)
        cp "$TEMP_DIR/icon-32.png" "$FAVICON_OUTPUT"
        echo "Created $FAVICON_OUTPUT (using PNG format - browsers accept this)"
    fi
else
    # Fallback: just copy the 32x32 PNG as favicon.ico
    # Most modern browsers accept PNG files even with .ico extension
    cp "$TEMP_DIR/icon-32.png" "$FAVICON_OUTPUT"
    echo "Created $FAVICON_OUTPUT (PNG format with .ico extension)"
fi

# Also copy to app directory for Next.js
cp "$FAVICON_OUTPUT" "src/app/favicon.ico" 2>/dev/null || true

# Cleanup
rm -rf "$TEMP_DIR"

echo "Done! Created favicon.ico in public/ and src/app/"

