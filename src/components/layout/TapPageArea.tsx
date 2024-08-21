interface Props {
    onClickPrev: () => void
    onClickNext: () => void
}

export default function TapPageArea({onClickPrev, onClickNext}: Props) {
  return (
    <section className="w-screen h-screen flex flex-row">
      <button className="w-[33%] h-full outline-none" onClick={onClickPrev}/>
      <button className="w-[67%] h-full outline-none" onClick={onClickNext}/>
    </section>
  );
}
