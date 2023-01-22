export type GalleryImageProps = {
  src: string;
  alt: string;
  label: string;
};

export type GalleryProps = {
  items: GalleryImageProps[];
};

export type ModalProps = {
  isOpen: boolean;
};
