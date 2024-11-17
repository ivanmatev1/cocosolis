import image from './sun.jpg';

interface ItemProps {
  name: string;
  comment: string;
  date: string;
  photo: string | null;
}

function Comment({ name, comment, photo, date }: ItemProps) {
  return (
    <div className="bg-slate-300 w-full min-w-72 p-2 flex flex-row my-3">
      <img className="size-10 rounded-full" src={image} alt="image" />
      <div className='px-2 w-auto grow'>
        <h1 className='my-2 font-semibold'>{name}</h1>
        <h1>{comment}</h1>
      </div>
      <h1>{date}</h1>
    </div>
  );
}

export default Comment;
