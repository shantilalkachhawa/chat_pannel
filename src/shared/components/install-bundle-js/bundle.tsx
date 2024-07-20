'use client'
import { useEffect } from 'react'
export const InstallBootstrapBundleJs = () => {
    useEffect(() => {
        // @ts-ignore
        import('bootstrap/dist/js/bootstrap.bundle.min.js')
    }, [])

    return <></>
}
