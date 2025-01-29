import Link from "next/link";


export default async function DashboardLayout({
    children,
  }: {
    children: React.ReactNode}) {

    return (
      <section>
        <header>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/dashboard/orders">Orders</Link>
        </header>
        <main>{children}</main>
      </section>
    )
  }