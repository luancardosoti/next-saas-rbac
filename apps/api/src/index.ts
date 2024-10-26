import { defineAbilityFor } from '@sass/auth'

const ability = defineAbilityFor({ role: 'ADMIN' })

console.log('hello')
const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDeleteOtherUsers = ability.can('delete', 'User')

const userCannotDeleteOtherUsers = ability.cannot('delete', 'User')

console.log('userCanInviteSomeoneElse', userCanInviteSomeoneElse)
console.log('userCanDeleteOtherUsers', userCanDeleteOtherUsers)
console.log('userCannotDeleteOtherUsers', userCannotDeleteOtherUsers)
