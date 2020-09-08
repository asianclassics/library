import React from 'react'
import { Link } from 'react-router-dom'

export const Breadcrumbs = ({ crumbs }) => {
    // Don't render a single breadcrumb.
    if (crumbs.length <= 1) {
        return null
    }

    return (
        <div>
            {/* Link back to any previous steps of the breadcrumb. */}
            {crumbs.map(({ name, path }, key) =>
                key + 1 === crumbs.length ? (
                    <span key={key} className='bold'>
                        {name}
                    </span>
                ) : (
                    <Link key={key} to={path}>
                        {name}
                    </Link>
                )
            )}
        </div>
    )
}
