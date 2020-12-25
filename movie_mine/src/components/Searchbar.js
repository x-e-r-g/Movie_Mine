import React from 'react';

const Searchbar = (props)=>{
    return (
        <div className="container" style={{marginTop: 20}}>
            <div className="row">
                <section className="col s6 offset-s4">
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className="input=field">
                            <input placeholder="Search for Movies" type="text" onChange={props.handleChange}/>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );   
}

export default Searchbar;