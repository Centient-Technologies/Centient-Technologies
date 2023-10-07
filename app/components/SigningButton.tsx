"use client"
interface SigningbuttonProps {
    OnClick: VoidFunction;

}
export const Signingbutton = ({ OnClick }: SigningbuttonProps) => {
    return (
        <button className="flex text-white bg-blue-800 rounded-md py-4 px-12 font-medium hover:bg-blue-600 my-0" onClick={OnClick} >Sign Up</button>
    )
}
