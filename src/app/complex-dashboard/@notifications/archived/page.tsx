import Card from '@/app/components/card'
import React from 'react'
import Link from 'next/link'

function ArchivedNotification() {
  return (
    <Card>
      <div> Archived Notiications</div>
      <Link href='/complex-dashboard'>Default</Link>
    </Card>
  )
}

export default ArchivedNotification