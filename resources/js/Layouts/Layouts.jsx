import Navbar from "../Navbar/Navbar";

export default function Layout({ children }) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>{children}</main>
        </>
    );
}
