import React from 'react'

const Welcome = ({user}) => {
  return (
    <div
    className="py-20"
    style={{ background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)" }}
  >
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-2 text-white">
        Welcome aboard {user}!
      </h2>
      <h3 className="text-2xl mb-8 text-gray-200">
        Monitor your health vitals smartly.
      </h3>
      <a
      type='button' 
      className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-300"
      href="/profile">
        Profile
      </a>
    </div>
  </div>
  )
}

export default Welcome