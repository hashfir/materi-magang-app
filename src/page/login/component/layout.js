import React from 'react'

const LayoutLogin = (props) => {
    const imageUrl = "https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=1060&t=st=1690936905~exp=1690937505~hmac=15d23c209a6b98ecdf744ec443f8bfeec11acb2256af74892a29f59e3f63ecfc";
    return (
        <div className='vh-100 d-flex align-items-center justify-content-center'>
            <div
                className="rounded shadow"
                style={{ width: '60vw', margin: 'auto' }}
            >
                <div className='d-flex flex-row text-light' >
                    <div className='w-50'>
                        <img style={{ width: '24em' }} src={imageUrl} alt="Description" />
                    </div>
                    <div className='w-50 bg-primary p-5'>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LayoutLogin