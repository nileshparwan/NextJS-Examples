import { useRouter } from 'next/router';
import React from 'react';
import Modal from "./Modal";
import MovieCreateForm from './MovieCreateForm';
import { createMovie } from '../actions';

const Sidebar = ({ appName, categories, activeCategory, changeCategory }) => {
    const modalRef = React.useRef();
    const router = useRouter();
    const setActiveCategory = (category) => activeCategory === category && 'active'; 

    const CloseModalHandler = () => {
        if (modalRef.current) {
            const closeButton = modalRef.current.querySelector(".button--close");
            closeButton.click();
        }
    };

    const HandleCreateMovie = (movie) => {
        createMovie(movie).then(movies => {
            CloseModalHandler();
            router.push("/");
        });
    };

    const ForwardModal = React.forwardRef(({ title, hasSubmit, children }, ref) => (
        <Modal title={title} hasSubmit={hasSubmit} modalRef={ref}>
            {children}
        </Modal>
    ));


    return (
        <div>
            <ForwardModal title="Create Movie" hasSubmit={false} ref={modalRef}>
                <MovieCreateForm handleFormSubmit={HandleCreateMovie} />
            </ForwardModal>
            <h1 className="my-4">{appName}</h1>
            <div className="list-group">
                {
                    categories.map(category => (
                        <a
                            href="#"
                            key={`c-${category.id}`}
                            onClick={() => changeCategory(category.name)}
                            className={`list-group-item ${setActiveCategory(category.name)}`}                            
                        >
                            {category.name}
                        </a>
                    ))
                }
            </div>
        </div>
    );
};

export default Sidebar;