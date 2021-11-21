

const Modal = ({ title, children, hasSubmit, modalRef }) => {

    const submitModel = (e) => {
        e.preventDefault();
        const parentElement = e.target.parentElement;
        const closeButton = parentElement.querySelector(".button--close");
        closeButton.click();
    };

    return (
        <div ref={modalRef}>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal3">
                Add Movie
            </button>

            <div className="modal fade" id="exampleModal3" tabIndex="-1" role="dialog" aria-labelledby="exampleModal3Label" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModal3Label">{title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary button--close" data-dismiss="modal">Close</button>
                            {
                                hasSubmit && (
                                    <button onClick={submitModel} type="button" className="btn btn-primary">Save changes</button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;