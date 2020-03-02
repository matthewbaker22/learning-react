import React, { useState, useEffect } from 'react'
import OwnerCard from './OwnerCard'
import OwnerManager from '../../modules/OwnerManager'

const OwnerList = (props) => {
    const [owners, setOwners] = useState([])

    const deleteOwner= id => {
        OwnerManager.delete(id)
        .then(() => OwnerManager.getAll().then(setOwners))
    }

    const getOwners = () => {
        return OwnerManager.getAll().then(ownersFromAPI => {
            setOwners(ownersFromAPI)
        })
    }

    useEffect(() => {
        getOwners()
    }, [])

    return (
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => {props.history.push("/owners/new")}}>
                    Admit Owner
                </button>
            </section>
            <div className="container-cards">
                {owners.map(owner => 
                    <OwnerCard 
                    key={owner.id} 
                    owner={owner} 
                    deleteOwner={deleteOwner}
                    {...props}
                    />
                )}
            </div>
        </>
    )
}

export default OwnerList