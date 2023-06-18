import React from 'react'
import Book from "./book"
import WitcherCover from "../assets/witcher.jpg"
import DanteCover from "../assets/dante.avif"
import DraculaCover from "../assets/dracula.jpg"
import FaustCover from "../assets/faust.jpg"
import PotterCover from "../assets/potter.jpg"
import RoseCover from "../assets/rose.jpg"

const data = [
    {
        id: 1,
        image: WitcherCover,
        title: "Witcher",
        description: "The story focuses on Geralt of Rivia and Ciri, who are linked by destiny. Ciri, princess of a recently conquered country and a pawn of international politics, becomes a witcher-in-training. Geralt is drawn into a whirlwind of events in his attempts to protect her",
        charecters: ['Geralt', 'Ciri', 'Dandelion', 'Yennefer']
    },
    {
        id: 2,
        image: DanteCover,
        title: "Divine Comedy",
        description: "The epic poem, The Divine Comedy, is about the author's journey towards God. It has three parts: Inferno (Hell), Purgatorio (Purgatory), and Paradiso (Heaven). Each part consists of thirty-three cantos. This division reflects the medieval theology specific to Christianity.",
        charecters: ['Dante', 'Beatrice', 'Virgil', 'Ciacco', 'Apostle Peter']
    },
    {
        id: 3,
        image: DraculaCover,
        title: "Dracula",
        description: "The novel tells the story of Dracula's attempt to move from Transylvania to England so that he may find new blood and spread the undead curse, and of the battle between Dracula and a small group of men and a woman led by Professor Abraham Van Helsing.",
        charecters: ['Dracula', 'Renfield', 'Van Helsing', 'Dr. John Sweard', 'Frankenstein', 'Mina Harker', 'Jonathan Harker']
    },
    {
        id: 4,
        image: FaustCover,
        title: "Faust",
        description: "Faust, also called Faustus or Doctor Faustus, hero of one of the most durable legends in Western folklore and literature, the story of a German necromancer or astrologer who sells his soul to the devil in exchange for knowledge and power.",
        charecters: ['Faust', 'Wagner', 'Thersites', 'Marthe', 'Mephistopheles', 'Gretchen', 'Valentin']
    },
    {
        id: 5,
        image: PotterCover,
        title: "Harry Potter and The Goblet of Fire",
        description: "It follows Harry Potter, a wizard in his fourth year at Hogwarts School of Witchcraft and Wizardry, and the mystery surrounding the entry of Harry's name into the Triwizard Tournament, in which he is forced to compete.",
        charecters: ['Harry Potter', 'Ron Weasley', 'Hermione Granger', 'Lord Voldemort', 'Alastor Moody', 'Albus Dumbledore']
    },
    {
        id: 6,
        image: RoseCover,
        title: "The Name Of The Rose",
        description: "It is a historical murder mystery set in an Italian monastery in the year 1327, and an intellectual mystery combining semiotics in fiction, biblical analysis, medieval studies, and literary theory. It was translated into English by William Weaver in 1983.",
        charecters: ['Unnamed Narrator', 'Adso of Melk', 'William of Baskerville', 'Abo of Fossonova']
    },
]


const BookList = () => {
    function message(title, charecters) {
        alert(`Title: ${title}, \nCharecters: ${charecters}`)
    }

    return (
        <div className='book-list'>
            {data.map((book) => 
                <Book key={book.id} title={book.title} description={book.description} image={book.image} charecters={book.charecters} action={message} />)}
        </div>
    )
}

export default BookList