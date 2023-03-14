import React from 'react';

const Skeleton = () => 
{
  return (
    <main className="bg-dark">
        <section className="spad bg-secondary">
            <div className="container bg-success">
                <div className="row bg-danger">
                    <div className="col-lg-12 text-center">Testing!</div>
                </div>
            </div>
        </section>
        {/* <section className="spad bg-secondary">
            <div className="container bg-success">
                <div className="row bg-danger">
                    <div className="col-lg-12 text-center">Testing!</div>
                </div>
            </div>
        </section> */}
    </main>
  )
}

export default Skeleton;