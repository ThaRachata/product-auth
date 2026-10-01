// ปุ่มล็อกอินและปุ่มล็อกเอาต์
import { signIn, signOut } from "@/auth";

type AuthButtonsProps = {
    isLoggedIn: boolean;
    userName?: string | null;
};

export function AuthButtons({ isLoggedIn, userName }: AuthButtonsProps) {
    if (isLoggedIn) {
        return (
            <div className="auth-area">
                <span className="auth-greeting">สวัสดี {userName ?? "ผู้ใช้งาน"}</span>
                <form
                    className="auth-form"
                    action={async () => {
                        "use server";
                        await signOut({ redirectTo: "/" }); //  เมื่อผู้ใช้ล็อกเอาต์แล้วให้เปลี่ยนเส้นทางไปยังหน้าแรก
                    }}
                >
                    <button type="submit">Logout</button>
                </form>
            </div>
        );
    }

    return (
        <form
            className="auth-form"
            action={async () => {
                "use server";
                // เติม: ชื่อ provider ของ Google (ตัวพิมพ์เล็ก) เพื่อให้ระบบล็อกอินด้วย Google 
                await signIn("google", { redirectTo: "/" });
            }}
        >
            <button type="submit">Login with Google</button>
        </form>
    );
} 