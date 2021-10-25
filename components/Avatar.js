function Avatar({url, className}) {
    return (
        <img className={`h-10 rounded-full cursor-pointer ${className} 
        transition duration-150 transform hover:scale-110`} 
        loading="lazy" src={url} alt="profilepic"
        />
    )
}

export default Avatar
