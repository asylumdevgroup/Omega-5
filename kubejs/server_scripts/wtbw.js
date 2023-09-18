// ADG Omega 5
// By EndangeredNayla and MCAdventureCity

onEvent('recipes', event => {
    // Basic Hydrator
    event.shaped('wtbw_machines:hydrator_basic', [
        'GPG',
        'GMG',
        'GBG'
    ], {
        G: 'wtbw_core:groundium',
        P: 'minecraft:packed_ice',
        M: 'wtbw_machines:machine_block',
        B: 'minecraft:bucket'
    })

    // Basic Dehydrator
    event.shaped('wtbw_machines:dehydrator_basic', [
        'GPG',
        'GMG',
        'GBG'
    ], {
        G: 'wtbw_core:groundium',
        P: 'minecraft:magma_block',
        M: 'wtbw_machines:machine_block',
        B: 'minecraft:bucket'
    })

    // Powered Furnace
    event.shaped('wtbw_machines:powered_furnace_basic', [
        'GFG',
        'GMG',
        'GFG'
    ], {
        G: 'wtbw_core:groundium',
        F: 'minecraft:furnace',
        M: 'wtbw_machines:machine_block'
    })

    // Basic Crusher
    event.shaped('wtbw_machines:crusher_basic', [
        'GPG',
        'GMG',
        'GBG'
    ], {
        G: 'wtbw_core:groundium',
        P: 'minecraft:piston',
        M: 'wtbw_machines:machine_block',
        B: 'minecraft:iron_block'
    })

    // Basic Compressor
    event.shaped('wtbw_machines:compressor_basic', [
        'GGG',
        'PMP',
        'GGG'
    ], {
        G: 'wtbw_core:groundium',
        P: 'minecraft:piston',
        M: 'wtbw_machines:machine_block'
    })
    
    // Fuel Generator
    event.shaped('wtbw_machines:fuel_generator_basic', [
        'IRI',
        'III',
        'IFI'
    ], {
        I: 'minecraft:iron_ingot',
        R: 'minecraft:redstone_block',
        F: 'minecraft:furnace'
    })
})