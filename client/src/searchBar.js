import React from 'react';

const Searchbar = props => {

    const [name, setName] = useLocalStorage('name', 'Bob');

    return (
        <div className='Search'>
        <input
        type="text"
        placeholder="Search a name"
        // value={this.state.name}
        // onChange={e => setName(e.target.value)}
        />
        </div>
    )
};

export default Searchbar;