import logo from "../assets/images/poke-logo.png";

export default function Navigation() {
    return (
        <header className="flex justify-between items-center gap-9 px-4 py-2 border-bottom-2 border-white/10 bg-red-300">
            <div className="w-50 max-w-[100vw] p-4">
                <img
                    src={logo}
                    alt="React Router"
                    className="block w-full"
                />
            </div>
            <div className="px-6">
                <a href="/" className="font-medium hover:underline">Home</a>
            </div>
        </header>
    );
};
