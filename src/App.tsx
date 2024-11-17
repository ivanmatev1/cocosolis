import React, { useState } from 'react';
import { ReactComponent as Logo } from './cocosolis-logo.svg';
import image from './city.jpg';
import './App.css';
import Item from './item';
import { AiOutlineMenu, AiOutlineShoppingCart, AiOutlineUser, AiOutlineMessage   } from "react-icons/ai";
import { slide as Menu } from 'react-burger-menu'
import Comment from './comment';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state: { isOpen: boolean }) => {
    setMenuOpen(state.isOpen);
  };
  return (
    <div>
      <header className='h-32 bg-slate-100 border-b-2'>
          <div className='h-8 bg-slate-400 content-center justify-items-center'>
            <p className='text-white font-bold'>БЕЗПЛАТНА ДОСТАВКА ДО 2 РАБОТНИ ДНИ</p>
          </div>
          <div className='flex flex-row items-center justify-center overflow-x-auto w-full h-24'>
            <Logo className='h-24'/>
            <div className='hidden md:flex'>
              <button className='font-light mx-3 text-slate-500 hover:text-teal-500'>НАЧАЛО</button>
              <button className='font-light mx-3 text-slate-500 hover:text-teal-500'>ПРОДУКТИ</button>
              <button className='font-light mx-3 text-slate-500 hover:text-teal-500'>CLUB</button>
              <button className='font-light mx-3 text-slate-500 hover:text-teal-500'>ЗА НАС</button>
              <button className='font-light mx-3 text-slate-500 hover:text-teal-500'>КОНТАКТИ</button>
            </div>
            <div className='md:hidden'>
            </div>
            <button className='mx-2' onClick={() => console.log('clicked')}><AiOutlineMenu size={24} /></button>
            <button className='mx-2' onClick={() => console.log('clicked')}><AiOutlineShoppingCart size={24}/></button>
            <button className='mx-2' onClick={() => console.log('clicked')}><AiOutlineUser size={24}/></button>
          </div>
      </header>
      <div className='h-12 flex flex-row items-center justify-center bg-slate-100 overflow-x-auto'>
            <button className='font-light mx-3 text-slate-500 hover:text-teal-500 hover:border-b-2'>ЛИЦЕ</button>
            <button className='font-light mx-3 text-slate-500 hover:text-teal-500 hover:border-b-2'>КОСА</button>
            <button className='font-light mx-3 text-slate-500 hover:text-teal-500 hover:border-b-2'>КОЖА</button>
            <button className='font-light mx-3 text-slate-500 hover:text-teal-500 hover:border-b-2'>АВТОБРОНЗАНТИ</button>
            <button className='font-light mx-3 text-slate-500 hover:text-teal-500 hover:border-b-2'>БЛЯСЪК</button>
            <button className='font-light mx-3 text-slate-500 hover:text-teal-500 hover:border-b-2'>ТЕН</button>
            <button className='font-light mx-3 text-slate-500 hover:text-teal-500 hover:border-b-2'>SPF</button>
      </div>
      <div className='overflow-hidden w-full h-128'>
        <div className='absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 content-center justify-items-center w-72 py-10'>
          <h1 className='text-white font-bold text-3xl text-center bg-slate-900/25'>Aura: Първият блестящ спрей с пептиди</h1>
          <button className=" bg-slate-900 hover:bg-slate-500 text-white px-4 py-2 px-5 mt-5 font-semibold text-2xl">КУПИ СЕГА</button>
        </div>        
        <img className='w-full h-full object-cover' src={image} alt="image" />;
      </div>
      <div className=' bg-slate-100 content-center justify-items-center py-4'>
        <h1 className='mb-4 text-white font-bold text-3xl'>ПРОМО ПАКЕТИ</h1>
        <div className=' h-auto w-full max-w-256 content-center justify-items-center grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4'>
          <Item title="Watermelon beauty" description="Suntan & Body oil." price={99.99} discountedPrice={111.99} buttonText="Добави"/>
          <Item title="Watermelon beauty" description="Suntan & Body oil." price={99.99} discountedPrice={null} buttonText="Добави"/>
          <Item title="Watermelon beauty" description="Suntan & Body oil." price={99.99} discountedPrice={111.99} buttonText="Добави"/>
          <Item title="Watermelon beauty" description="Suntan & Body oil." price={99.99} discountedPrice={111.99} buttonText="Добави"/>
          <Item title="Watermelon beauty" description="Suntan & Body oil." price={99.99} discountedPrice={111.99} buttonText="Добави"/>
          <Item title="Watermelon beauty" description="Suntan & Body oil." price={99.99} discountedPrice={null} buttonText="Добави"/>
          <Item title="Watermelon beauty" description="Suntan & Body oil." price={99.99} discountedPrice={111.99} buttonText="Добави"/>
          <Item title="Watermelon beauty" description="Suntan & Body oil." price={99.99} discountedPrice={111.99} buttonText="Добави"/>
        </div>
      </div>
      <div className='grid lg:grid-cols-2 xs:grid-cols-1'>
        <div className='w-auto min-w-72 bg-slate-200 content-center justify-items-center'>
          <div className='w-4/5 py-5'>
              <h1 className='font-bold mt-3'>Натурални и Био</h1>
              <h1>Продуктите на COCOSОLIS са винаги натурални и създадени само с най-висококачествени био, студено пресовани масла.</h1>
              <h1 className='font-bold mt-3'>Създадени с любов</h1>
              <h1>Създадени с любов и уважение към хората и природата. Нежни към кожата. Притежаващи аромат, в който ще се влюбите</h1>
              <h1 className='font-bold mt-3'>С отношение</h1>
              <h1>Без наличие на парабени, оцветители, минерални и синтетични масла и разбира се, без тестване върху животни.</h1>
          </div>
        </div>
        <div className='w-full min-w-72 overflow-hidden h-128'>
          <img className='w-full h-full object-cover' src={image} alt="image" />;
        </div>
      </div>
      <div className='w-full bg-slate-500 content-center justify-items-center'>
        <div className='w-4/5 min-w-350 content-center justify-items-center p-5'>
          <h1 className='text-slate-100 font-medium'>
            Нека бъдем приятели! Абонирайте се, за да бъдете сред първите, които ще научат за нашите нови продукти и промоции:
          </h1>
          <input placeholder='Твоят имейл тук' type="text" name="email" className='m-2 w-full h-10 min-w-72 '/>
          <button className='m-2 w-full h-10 min-w-72 bg-slate-200 font-semibold'>ВЛЕЗ В КЛУБА</button>
        </div>
      </div>
      <div className='w-full bg-slate-100 content-center justify-items-center'>
        <div className='w-3/5 py-5'>
          <h1 className='text-3xl pb-5'>ПОТРЕБИТЕЛСКИ ОТЗИВИ</h1>
          <div className='w-full'>
              <Comment name="George" comment="Good Good Good v Good Good" date="17.11.2024" photo={null}/>
              <Comment name="George" comment="Good Good Good v Good Good" date="17.11.2024" photo={null}/>
              <Comment name="George" comment="Good Good Good v Good Good" date="17.11.2024" photo={null}/>
              <Comment name="George" comment="Good Good Good v Good Good" date="17.11.2024" photo={null}/>
              <Comment name="George" comment="Good Good Good v Good Good" date="17.11.2024" photo={null}/>
              <Comment name="George" comment="Good Good Good v Good Good" date="17.11.2024" photo={null}/>
              <Comment name="George" comment="Good Good Good v Good Good" date="17.11.2024" photo={null}/>
          </div>
        </div>
      </div>
      <footer className='w-full p-2 text-center bg-slate-700'>
        footer
      </footer>
      <button className='bg-pink-700 hover:bg-pink-400 rounded-full size-12 content-center justify-items-center fixed  z-10 bottom-1 right-1'>
        <AiOutlineMessage size={24}/>
      </button>
    </div>
  );
}

export default App;
