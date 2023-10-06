import ExtLink from './ExtLink';

interface Props {
  preprint: any;
  index: number;
}

const PreprintItem = ({ preprint: preprint, index }: Props): JSX.Element => {
  return (
    <div className="mt-4 mb-8">
      <p className="text-base text-gray-500">
        <b><i>{preprint.title}</i></b> <br />{preprint.author}<br />
        <a className="text-sm">{preprint.conference}</a>
      </p>
      <p className="text-gray-500 flex justify-end text-sm bold">
        {preprint.links.map((linkItem: any, idx: any) => (
          <ExtLink href={linkItem.url} key={idx}> [{linkItem.name}] &nbsp;</ExtLink>
        ))}
      </p>

    </div>

  );
};

export default PreprintItem;
