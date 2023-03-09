import Link from 'next/link';
import React from 'react'
import { DropdownMenuContainer } from './DropdownMenu.styles';

interface DropdownMenuProps {
    isOpen: boolean;
};

const DropdownMenu = ({ isOpen }: DropdownMenuProps) => {
    return (
        <DropdownMenuContainer isOpen={isOpen}>
            <Link href='/instituciones'>Instituciones</Link>
            <Link href='/proyectos'>Proyectos</Link>
            <Link href='/eventos'>Eventos</Link>
        </DropdownMenuContainer>
    )
}

export default DropdownMenu