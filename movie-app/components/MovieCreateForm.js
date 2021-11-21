import React from "react";

const MovieCreateForm = ({ handleFormSubmit, initialData, submitButtonText }) => {
    const defaultData = { name: "", description: "", rating: "", image: "", cover: "", longDesc: "" }
    const formData = initialData ? {...initialData} : defaultData; 
    const [form, setForm] = React.useState({...formData});

    const HandleChange = (e) => {
        e.preventDefault();
        const key = e.target.name;
        setForm({ ...form, [key]: e.target.value });
    };

    const handleGenreChange = (event) => {
        const { options } = event.target;
        let value = [];
        const optionLength = options.length;

        for (let i = 0; i < optionLength; i++) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }

        setForm({ ...form, genre: value.toString() });
    };


    const submitForm = (event) => {
        //  function to create movie.
        event.preventDefault();
        handleFormSubmit({ ...form });

    };

    return (
        <form onSubmit={submitForm}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    aria-describedby="emailHelp"
                    placeholder="Lord of the Rings"
                    value={form.name}
                    onChange={HandleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    placeholder="Somewhere in Middle-earth..."
                    value={form.description}
                    onChange={HandleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Rating</label>
                <input
                    type="number"
                    max="5"
                    min="0"
                    className="form-control"
                    id="rating"
                    name="rating"
                    placeholder="3"
                    value={form.rating}
                    onChange={HandleChange}
                />
                <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input
                    type="text"
                    className="form-control"
                    id="image"
                    name="image"
                    placeholder="http://....."
                    value={form.image}
                    onChange={HandleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="cover">Cover</label>
                <input
                    id="cover"
                    name="cover"
                    type="text"
                    className="form-control"
                    placeholder="http://......"
                    value={form.cover}
                    onChange={HandleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="longDesc">Long Description</label>
                <textarea
                    className="form-control"
                    id="longDesc"
                    name="longDesc"
                    rows="3"
                    value={form.longDesc}
                    onChange={HandleChange}
                >
                </textarea>
            </div>
            <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <select
                    multiple
                    className="form-control"
                    id="genre"
                    onChange={handleGenreChange}
                >
                    <option>drama</option>
                    <option>action</option>
                    <option>adventure</option>
                    <option>historical</option>
                    <option>action</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">{submitButtonText || `Create`}</button>
        </form>
    );
};

export default MovieCreateForm;