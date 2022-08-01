import React, { useState } from 'react'
import NavItem from './NavItem'


export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)

return !isOpen ? 
    <NavItem isOpen={isOpen} setIsOpen={setIsOpen} /> 
    :  <NavItem type="open" isOpen={isOpen} setIsOpen={setIsOpen} />

}
