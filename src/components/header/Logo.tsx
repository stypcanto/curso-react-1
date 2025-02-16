function Logo() {
  return (
    <div className="flex items-center justify-center p-4">
      <img
        src="https://edteam-media.s3.amazonaws.com/app/utils/logo/isotipo-color.svg"
        alt="Logo de la empresa"
        className="w-16 h-16 md:w-20 md:h-20 object-contain transition-transform duration-300 hover:scale-110"
      />
    </div>
  );
}

export default Logo;
