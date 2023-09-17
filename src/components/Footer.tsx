import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col md:flex-row p-4 border-t-2 text-center justify-center items-center mt-5 pb-7 sm:px-4 px-2">
      <span>Powered by&nbsp;</span>
      <div>
        <Link
          href="https://vercel.com"
          target="_blank"
          className="font-bold text-slate-600 hover:text-slate-900 transition-colors"
        >
          Vercel
        </Link>
        ,&nbsp;
        <Link
          href="https://replicate.com"
          target="_blank"
          className="font-bold text-slate-600 hover:text-slate-900 transition-colors"
        >
          Replicate
        </Link>
        ,&nbsp;and&nbsp;
        <Link
          href="https://cloudinary.com/"
          target="_blank"
          className="font-bold text-slate-600 hover:text-slate-900 transition-colors"
        >
          Cloudinary
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
