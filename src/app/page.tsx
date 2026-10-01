import { auth } from "@/auth";
import { AuthButtons } from "@/app/components/auth-button";
import ProductExplorer from "@/app/components/ProductExplorer";

export default async function HomePage() {
  const session = await auth();
  // เติม: ฟังก์ชันที่แปลงค่าเป็น true หรือ false
  const isLoggedIn = !!session?.user;

  return (
    <>
      <main className="home-shell">
        <header className="site-header">
          <h1>ร้านค้า</h1>
          <AuthButtons isLoggedIn={isLoggedIn} userName={session?.user?.name} />
        </header>
        {!isLoggedIn && (
          <p className="home-message">
            กรุณาเข้าสู่ระบบเพื่อดูรายละเอียดสินค้า
          </p>
        )}
      </main>
      {isLoggedIn && <ProductExplorer />}
    </>
  );
}
