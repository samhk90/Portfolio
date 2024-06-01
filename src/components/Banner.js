
import React from 'react';
import Nav from './Nav';

export default function Banner() {
  return (
<div className="banner">
  <Nav />
<div className="container-fluid p-5">
  <h1 className="text-left btitle mx-4 my-4 text-white">Hi, I'm Md.Samee Shaikh</h1>
  <h3 className="text-left btext mx-4 text-white">Empowering the future,</h3>
  <h3 className="text-left btext mx-4 secondary-color">one line of code at a time...</h3>
</div>
</div>
  );
}
