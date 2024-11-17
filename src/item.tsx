import image from './sun.jpg';

interface ItemProps {
  title: string;
  description: string;
  price: number;
  discountedPrice: number | null;
  buttonText: string;
}

function Item({ title, description, price, discountedPrice, buttonText }: ItemProps) {
  return (
    <div className="bg-slate-300 w-full min-w-72 max-w-128 p-2 justify-items-center">
      <div className="overflow-hidden w-full h-auto max-h-72">
        <img className="w-full h-full object-cover" src={image} alt="image" />
      </div>
      <h1 className="w-full py-1 text-center text-2xl">{title}</h1>
      <p className="text-center py-1">{description}</p>
      <div className="flex flex-row pt-3">
        <h1 className="text-2xl px-2">{price}  лв.</h1>
        {discountedPrice !== null && (
          <h1 className="text-2xl px-2 line-through">{discountedPrice} лв.</h1>
        )}
      </div>
      <div className="h-12 w-full bg-slate-900 flex items-center justify-center hover:bg-slate-500">
        <h1 className="text-white font-semibold">{buttonText}</h1>
      </div>
    </div>
  );
}

export default Item;
