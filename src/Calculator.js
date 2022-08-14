import React from 'react'
import Button from './components/Button'
import ToggleThemes from './components/ToggleThemes'

const Calculator = () => {
  return (
    <main className='bg-white dark:bg-black transition-all h-screen'>
        <article className='max-w-screen-sm mx-auto p-4'>
            <section className='flex flex-row-reverse'>
                <ToggleThemes/>
            </section>
            <section>
                <Button text='C'/>
            </section>
        </article>
    </main>
  )
}

export default Calculator