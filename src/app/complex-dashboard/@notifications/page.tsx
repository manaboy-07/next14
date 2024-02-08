import Card from '@/app/components/card'
import React from 'react'
import Link from 'next/link'

function Notification() {
  return (
    <Card>
      <div>Notiications</div>
      <Link href='/complex-dashboard/archived'> Archived</Link>
    </Card>
  )
}

export default Notification