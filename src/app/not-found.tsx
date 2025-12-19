import { Card, CardContent } from "@/src/components/ui/card";
import { AlertCircle, ShoppingCart } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";


export default function NotFound() {
  return (
    <>
    <Header/>
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6">
            <div className="flex mb-4 gap-2">
              <AlertCircle className="h-8 w-8 text-red-500" />
              <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
            </div>
            <Link
                href="/"
                className="btn-outline block w-full text-center mb-2 items-center justify-center px-6 py-3 rounded-md"
                data-testid="button-hero-learn"
                aria-label="Go back to home page"
              >
                Back to Home
              </Link>
            <Link
                href="https://www.amazon.com/dp/B0FPYZ7P67"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex w-full items-center justify-center text-white px-6 py-3 rounded-md"
                data-testid="button-hero-shop"
                aria-label="Shop Aspetto Beauty products on Amazon - Opens in new tab"
              >
                <ShoppingCart className="w-5 h-5 mr-2" aria-hidden="true" />
                Shop Now on Amazon
              </Link>

          </CardContent>
        </Card>
      </div>
      <Footer/>
    </>
  );
}
