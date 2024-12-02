import Link from "next/link"
export default function Home () {
    return (
      <div>
        <h1>Lets learn How to link Different Pages To Home Page</h1>
        
        <Link className="mr-5 hover:text-red-900" href= {"http://localhost:3000/home"}> Home </Link>

        <Link className="mr-5 hover:text-green-900"href={"http://localhost:3000/aboutus"}> About Us </Link>

        <Link className="mr-5 hover:text-blue-900"href={"http://localhost:3000/contactus"}> Contact Us </Link>
        
        <Link className="mr-5 hover:text-pink-900"href={"http://localhost:3000/privacyPolicy"}> Privacy Policy  </Link>


      </div>
    )
  }