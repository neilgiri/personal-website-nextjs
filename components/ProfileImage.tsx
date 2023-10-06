import Image from 'next/image';

const ProfileImage = (): JSX.Element => {

  return (
    <Image
      className=" select-none transition-all pointer-events-none rounded-md"
      src="/images/profile400.jpg"
      // onMouseOver = {e => e.currentTarget.src = "/images/gelo.HEIC"}

      // onMouseOut = {e => e.currentTarget.src = "/images/me.jpg"}
      draggable={false}
      alt="My face"
      width={178}
      height={230}
    />
  );
};

export default ProfileImage;
