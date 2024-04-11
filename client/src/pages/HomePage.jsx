import { useEffect, useState } from "react"
import hello from "../assets/hello.jpeg"
import FormComponent from "../components/forms/FormComponent"

function HomePage() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const loadImage = async () => {
            await new Promise((resolve) => {
                const img = new Image()
                img.onload = () => resolve(img)
                img.src = hello
            })
            setIsLoaded(true)
        }
        loadImage()
    }, [])

    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-16 bg-yellow-500">
            <div className="my-12 flex h-full min-w-full flex-col items-center justify-evenly sm:flex-row sm:pt-0">
                <div className="flex w-full animate-up-down justify-center sm:w-1/2 sm:pl-4">
                    {isLoaded && (
                        <img
                            src={hello}
                            alt="CoDev Illustration"
                            className="mx-auto w-[250px] sm:w-[400px]"
                        />
                    )}
                </div>
                <div className="flex w-full items-center justify-center sm:w-1/2">
                    <FormComponent />
                </div>
            </div>
        </div>
    )
}

export default HomePage
