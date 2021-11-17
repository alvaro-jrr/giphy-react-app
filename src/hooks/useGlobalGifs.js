import { useContext } from "react";
import GifsContext from "context/GifsContext";

const useGlobalGifs = () => useContext(GifsContext).gifs;

export default useGlobalGifs;
