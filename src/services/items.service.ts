import { Book } from "../models/book";
import { Cd } from "../models/cd";

export class ItemsService {
    booksList: Book[] = [
        {
            title: "The Time Machine",
            author: "H. G. Wells",
            publishDate: "1995-04-03",
            isbn: "0486284727",
            isLent: false
        },
        {
            title: "Do Androids Dream of Electric Sheep?",
            author: "Philip K. Dick",
            publishDate: "1996-05-28",
            isbn: "5533117542",
            isLent: true
        },
        {
            title: "de la Terre À La Lune",
            author: "Jules Verne",
            publishDate: "1976-03-01",
            isbn: "2253006319",
            isLent: false
        }
    ];

    cdsList: Cd[] = [
        {
            title: "Showbiz",
            author: "Muse",
            publishDate: "1999",
            isLent: false
        },
        {
            title: "Origin of Symmetry",
            author: "Muse",
            publishDate: "2001",
            isLent: false
        },
        {
            title: "The 2nd Law",
            author: "Muse",
            publishDate: "2012",
            isLent: false
        }
    ];

    toggleBookIsLent(index: number) {
        this.booksList[index].isLent = !this.booksList[index].isLent;
    }

    toggleCdIsLent(index: number) {
        this.cdsList[index].isLent = !this.cdsList[index].isLent;
    }
}