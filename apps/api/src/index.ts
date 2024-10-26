import { defineAbilityFor, projectSchema } from '@sass/auth'

const ability = defineAbilityFor({ role: 'MEMBER', id: 'user-id' })

const project = projectSchema.parse({ id: 'project-id', ownerId: 'user-id' })
const project2 = projectSchema.parse({ id: 'project-id', ownerId: 'user-id-2' })

console.log(ability.can('get', 'Billing'))
console.log(ability.can('create', 'Invite'))
console.log(ability.can('delete', project))
console.log(ability.can('delete', project2))
