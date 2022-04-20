import React, { FC } from 'react'

interface Works {
  title: string
  img: string[]
  company: string
  link?: string[]
  appLink?: {
    [key: string]: string
  }
  descriptions?: string[]
  type: string
  framework?: string
  isTeam: boolean
}

interface WorksProps {
  data: Works[]
}

const Works: FC<WorksProps> = (props: WorksProps) => {
  const { data } = props

  return (
    <div className='my-5'>
      <h2>Works</h2>
      {data.map(
        ({
          appLink,
          company,
          descriptions,
          framework,
          link,
          img,
          isTeam,
          title,
          type
        }) => (
          <div className='card  border-primary my-3' key={title}>
            <div className='card-header text-center'>
              <div style={{ fontSize: 32 }} className='font-weight-light'>
                {`${title}( ${company} )`}
              </div>
            </div>
            <div className='row  m-0'>
              <div className='col-12 row m-0'>
                <h4 className='col-6 my-2 text-center'>
                  <span className='badge badge-pill badge-primary'>{type}</span>
                </h4>
                <h4 className='col-6 my-2 text-center'>
                  <span className='badge badge-pill badge-primary'>
                    {framework}
                  </span>
                </h4>
              </div>
              {isTeam && type === 'App' && (
                <div className='col row my-4'>
                  <div className='col-3 '>
                    <img className='img-fluid' src={img[0]} alt='' />
                  </div>
                  <div className='col-9 px-3'>
                    {descriptions && (
                      <ul>
                        {descriptions.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )}
              {!isTeam &&
                img.map((image, i) => (
                  <div className='col row m-0 align-items-center' key={image}>
                    <img
                      className='img-fluid py-1 px-0 col-12'
                      src={image}
                      alt=''
                      key={image}
                    />
                    <div className='col-12 pb-1 d-flex justify-content-center'>
                      {link && (
                        <a
                          href={link[i]}
                          className='btn btn-outline-primary'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          {`link${i + 1}`}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
            </div>
            {isTeam && type === 'App' && (
              <div className='card-footer d-flex justify-content-around'>
                {appLink &&
                  Object.keys(appLink).map((key: string) => (
                    <a
                      href={appLink[key]}
                      className='btn btn-outline-primary'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {key}
                    </a>
                  ))}
              </div>
            )}
          </div>
        )
      )}
    </div>
  )
}

export default Works
