import React, {useEffect} from 'react';
import Tmdb from './Tmdb';

export default function MyFunc() {

  useEffect(() => {
    const loadAll = async () => {
      // pegando a lista TOTAL
      let list = await Tmdb.getHomeList();

      console.log(list);
    }
  }, []);

  return (
    <div>
      Olá Mundo! loadAll
    </div>
  );
}