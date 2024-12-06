"use client"
import { useParams } from 'next/navigation'
import MaratonCard from './MaratonCard'
import { maratones } from '@/data/maratones'

const SwitchMaraton = () => {
  const { maraton } = useParams()
  switch (maraton) {
    case 'marvel':
      return (
        <MaratonCard titulo={maratones.marvel.titulo} height={"h-[10000px]"} contenido={maratones.marvel.contenido} />
      )
    case 'harry-potter':
      return (
        <MaratonCard titulo={maratones.harry_potter.titulo} height={"h-[1100px]"} contenido={maratones.harry_potter.contenido} />
        )
    case 'rapidos-y-furiosos':
      return (
        <MaratonCard titulo={maratones.rapidos_y_furiosos.titulo} height={"h-[1300px]"} contenido={maratones.rapidos_y_furiosos.contenido} />
      )
  }
}

export default SwitchMaraton