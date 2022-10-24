import React from 'react'

function Sidebar() {
    return (
        <div>
            <header style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <img
                    src='https://swingsearch.com/wp-content/uploads/2019/07/chime-logo-transparent-green.png'
                    alt=''
                    style={{
                        height: '65px'
                    }}
                />
                <div>
                    <p style={{
                        fontSize: '28px',
                        fontWeight: '300',
                        marginBottom: '-10px'
                    }}>$23,092.22</p>
                    <p style={{
                        fontSize: '12px',
                        color: '#b3b3b3'
                    }}>Chime Checking Balance</p>
                </div>
            </header>
            <div className='sidebar__links'>
                {/*  */}
            </div>
        </div>
    )
}

export default Sidebar