import banner from "./assets/images/banner.png";
import instagram from "./assets/images/instagram.png";
import tiktok from "./assets/images/tiktok.png";
import youtube from "./assets/images/youtube.png";

function App() {
    return (
        <div
            className="w-screen h-screen flex flex-col items-center justify-center gap-12 
                        overflow-x-hidden bg-primary text-white font-thin"
        >
            <img className="h-40 object-cover" src={banner} alt="Lydiob7 Banner" />
            <div className="text-center text-2xl">
                <h1 className="tracking-widest">Lydio b7</h1>
                <h2 className="mt-2 mb-12">Desarrollo web en español</h2>
                <p className="text-xl max-w-xl">
                    Página en construcción, podés seguir mi canal de YouTube y mis redes sociales 👇🏽
                </p>
            </div>
            <div className="flex items-center gap-12 h-12">
                <a className="h-full block" href="https://youtube.com/@lydiob7" target="_blank" rel="noreferrer">
                    <img className="h-full object-fit-contain" src={youtube} alt="YouTube" />
                </a>
                <a className="h-full block" href="https://instagram.com/lydiob7" target="_blank" rel="noreferrer">
                    <img className="h-full object-fit-contain" src={instagram} alt="Instagram" />
                </a>
                <a
                    className="relative h-full block tiktok-logo"
                    href="https://tiktok.com/@lydiob7"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className="h-full object-fit-contain" src={tiktok} alt="Tiktok" />
                </a>
            </div>
        </div>
    );
}

export default App;
