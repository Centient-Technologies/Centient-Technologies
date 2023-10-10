import Link from "next/link";


export default function ContactPage() {
    return (
        <div className="flex flex-col space-y-6 justify-between">
            <div className=" flex flex-col md:flex-row md:space-y-6 space-y-6 md:space-y-0 bg-white-300 text-black w-full max-w-6xl p-8 rounded-xl">
                <div className="bg-white-300 text-black w-full max-w-6xl p-8 rounded-xl ">
                    <div>
                        <h1 className="font-bold text-4xl tracking-wide">Have Questions?</h1>
                        <p className="pt-2 text-black text-sm">Please feel free to call or email us,or use our contact form to get in touch with us.We look forward to hearing from you!</p>
                    </div>
                    <div   >
                        <div className="bg-white-300 text-black w-full max-w-6xl p-8 rounded-xl">
                            <div className="font-bold text-2xl">
                                <span>Emergency? Call Us:</span>
                            </div>
                            <div><div>
                                <span>+(233) 57 848 4353</span>
                            </div></div>
                        </div>

                        <div className="bg-white-300 text-black w-full max-w-6xl p-8 rounded-xl">
                            <div className="font-bold text-2xl">
                                <span>Send Us Mail</span>
                            </div>
                            <div>
                                <span>centienttechnologies@gmail.com</span>
                            </div>
                        </div>

                        <div className="bg-white-300 text-black w-full max-w-6xl p-8 rounded-xl">
                            <div className="font-bold text-2xl">
                                <span>Find the Studio </span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="bg-gray-200 rounded-xl w-full max-w-4xl shadow-lg p-8">
                    <form>
                        <div className="w-full flex flex-col my-4">
                            <label className="font-bold text-black-800" htmlFor="Name">Name</label>
                            <input type="text" placeholder="Name" minLength={3} maxLength={150} required className=" p-4 bg-gray-50 border border-gray-100" autoComplete="off" id="name" />
                        </div>

                        <div className="w-full flex flex-col my-4">
                            <label className="font-bold text-black-800" htmlFor="email">Email</label>
                            <input type="email" placeholder="Email" minLength={5} maxLength={150} required className=" p-4 bg-gray-50 border border-gray-100" autoComplete="off" id="Email" />

                        </div>
                        <div className="w-full flex flex-col my-4">
                            <label className="font-bold text-black-800" htmlFor="Project Name">Project Name</label>
                            <input type="Project Name" placeholder="Project Name" minLength={5} maxLength={150} required className=" p-4 bg-gray-50 border border-gray-100" autoComplete="off" id="Email" />

                        </div>
                        <div>
                            <label className="font-bold text-black-800" htmlFor="Project Description">Project Description</label>
                            <textarea rows={4} required minLength={10} maxLength={500} name="Project Description" placeholder="Project Description" className="w-full p-4 bg-gray-50 border border-gray-100" />
                        </div>
                        <button type="submit" className=" px-4 py-2 w-40 bg-blue-700 text-white font-medium mt-4">Send Message</button>
                    </form>
                </div>
            </div>
            <div></div>
        </div>

    );
}
