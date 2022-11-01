import React from 'react'

const Footer = () => {
    let footerStyle = {
        width: "100%"
    }
    return (
        <>
            <footer className='bg-danger text-light' style={footerStyle}>
                <p className="text-center p-5 m-2">
                    Copyright &copy; MyTask.com
                </p>
            </footer>
        </>
    )
}

export default Footer
