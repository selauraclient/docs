import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "404 | Page Not Found",
};

export default function NotFound() {
    return (
        <div className="flex items-center w-full h-screen">
            <Image
                src="/icon0.svg"
                alt="404"
                width={30}
                height={30}
                className="mx-auto hidden md:block absolute top-4 left-4"
            />
            <style>
                {`.selaura-button {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: .5em;
                    padding: 10px 20px;
                    font-size: 14px;
                    font-weight: 500;
                    text-align: center;
                    cursor: pointer;
                    border-radius: .5em;
                    background-color: var(--color-fd-card);
                    color: var(--selaura-light);
                    transition: all .3s ease;
                    user-select: none;
                    border: solid 1px var(--color-fd-border);
                    box-sizing: border-box;
                    text-decoration: none;
                }`}
            </style>
            <div className="w-full space-y-6 text-center">
                <section className="flex flex-col items-center w-full gap-4">
                    <p className="text-4xl text-bold">404</p>
                    <p className="text-md text-center max-w-3xl">
                        Oops! It seems like the page you are looking for does not exist or has been moved. Please check the URL or return to the homepage.
                    </p>
                </section>

                <Link
                    href="/"
                    className="selaura-button"
                >
                    Return to Docs
                </Link>
            </div>
        </div>
    );
}