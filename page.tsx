
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Mail, Info } from "lucide-react";

const products = [
  {
    id: 1,
    name: "ساعة حريمي فاخرة",
    category: "حريمي",
    price: "299 ريال",
    image: "https://via.placeholder.com/300x300?text=ساعة+حريمي"
  },
  {
    id: 2,
    name: "ساعة رجالي كلاسيكية",
    category: "رجالي",
    price: "349 ريال",
    image: "https://via.placeholder.com/300x300?text=ساعة+رجالي"
  }
];

export default function PrimeHour() {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 py-10">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold">Prime Hour</h1>
        <p className="text-gray-400 mt-2">أحدث وأفخم الساعات الرجالية والحريمية</p>
      </header>

      <nav className="flex justify-center gap-6 mb-12 text-gray-300">
        <a href="#products" className="hover:text-white">المنتجات</a>
        <a href="#about" className="hover:text-white">من نحن</a>
        <a href="#contact" className="hover:text-white">تواصل معنا</a>
        <a href="#cart" className="hover:text-white">عربة التسوق</a>
      </nav>

      <section id="products" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="bg-gray-800 text-white">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-t-2xl" />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-300 mb-4">{product.price}</p>
              <Button className="bg-blue-600 hover:bg-blue-700 w-full flex items-center justify-center gap-2">
                <ShoppingCart size={18} />
                أضف إلى السلة
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section id="about" className="mt-20 text-center">
        <h2 className="text-2xl font-bold mb-4">من نحن</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Prime Hour هو متجر متخصص في تقديم أحدث وأجود أنواع الساعات الرجالية والحريمية، نقدم لك تشكيلة فاخرة تناسب جميع الأذواق والمناسبات.
        </p>
      </section>

      <section id="contact" className="mt-20 text-center">
        <h2 className="text-2xl font-bold mb-4">تواصل معنا</h2>
        <p className="text-gray-400">راسلنا عبر البريد الإلكتروني: <a href="mailto:info@primehour.com" className="text-blue-400">info@primehour.com</a></p>
      </section>

      <section id="cart" className="mt-20 text-center">
        <h2 className="text-2xl font-bold mb-4">عربة التسوق</h2>
        <p className="text-gray-500">عربتك حالياً فارغة.</p>
      </section>

      <footer className="mt-20 text-center text-gray-500 text-sm">
        &copy; 2025 Prime Hour. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
}
