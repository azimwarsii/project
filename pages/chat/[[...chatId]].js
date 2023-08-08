import { ChatSidebar } from "@/components/ChatSidebar"
import { useState } from "react"

export default function Home(){
    const [messageText, setMessageText] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(messageText);
    };
    return(
        <>
            <div className=" grid h-screen grid-cols-[250px_1fr]">
                <ChatSidebar/>
                <div className=" flex flex-col bg-gray-700">
                    <div className=" flex-1">chat window</div>
                    <footer className=" bg-gray-800 p-10">
                        <form onSubmit={handleSubmit}>
                            <fieldset className=" flex gap-2">
                                <textarea 
                                    placeholder="Send a message" 
                                    className=" w-full resize-none rounded-md bg-gray-700 p-2 text-white focus:bg-gray-600 focus:outline focus:outline-emerald-600"
                                    value={messageText}
                                    onChange={e => setMessageText(e.target.value)}
                                />
                                <button type="submit" className="btn">Send</button>
                            </fieldset>
                        </form>
                    </footer>
                </div>
            </div>
        </>
    )
}