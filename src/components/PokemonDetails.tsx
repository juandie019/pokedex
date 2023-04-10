import React from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';
import { FullPokemon } from '../interfaces/pokeapiInterface';
import { FadeInImage } from './FadeInImage';

interface Props {
    fullPokemon: FullPokemon
}

export const PokemonDetails = ( { fullPokemon }: Props ) => {

    return (
    <ScrollView
        showsVerticalScrollIndicator={ false }
        style={{
            ...StyleSheet.absoluteFillObject,
        }}
    >
        {/* Types and weight */}
        <View
            style={{
                ...styles.container,
                marginTop: 370,
            }}
        >
            <Text>Types</Text>
            <View style={{ flexDirection: 'row' }}>
                {
                    fullPokemon.types.map( ({ type }) => (
                        <Text
                            key={ type.name }
                            style={{
                                ...styles.regularText,
                                marginRight: 10,
                            }}
                        >
                            { type.name }
                        </Text>
                    ))
                }
            </View>
            <Text style={{ marginTop: 20 }}>Peso</Text>
            <Text style={ styles.regularText }>{ fullPokemon.weight }kg</Text>
        </View>


        {/* Sprites */}
        <View style={ styles.container }>
            <Text style={{ marginTop: 20 }}>Sprites</Text>
        </View>
        <ScrollView
            horizontal={ true }
            showsHorizontalScrollIndicator={ false }
        >
            <FadeInImage
                uri={ fullPokemon.sprites.front_default }
                style={ styles.basicSprite }
            />
            <FadeInImage
                uri={ fullPokemon.sprites.back_default }
                style={ styles.basicSprite }
            />
            <FadeInImage
                uri={ fullPokemon.sprites.front_shiny }
                style={ styles.basicSprite }
            />
            <FadeInImage
                uri={ fullPokemon.sprites.back_shiny }
                style={ styles.basicSprite }
            />
        </ScrollView>

        {/* Habilidades */}
        <View style={ styles.container }>
            <Text style={{ marginTop: 20 }}>Habilidades base</Text>

            <View style={{ flexDirection: 'row' }}>
                {
                    fullPokemon.abilities.map( ({ ability }) => (
                        <Text
                            key={ ability.name }
                            style={{
                                ...styles.regularText,
                                marginRight: 10,
                            }}
                        >
                            { ability.name }
                        </Text>
                    ))
                }
            </View>
        </View>

        {/* Habilidades */}
        <View style={ styles.container }>
            <Text style={{ marginTop: 20 }}>Movimientos</Text>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
                {
                    fullPokemon.moves.map( ({ move }) => (
                        <Text
                            key={ move.name }
                            style={{
                                ...styles.regularText,
                                marginRight: 10,
                            }}
                        >
                            { move.name }
                        </Text>
                    ))
                }
            </View>
        </View>

        {/* Habilidades */}
        <View style={ styles.container }>
            <Text style={{ marginTop: 20 }}>Stats</Text>

            <View >
                {
                    fullPokemon.stats.map( (statb, i) => (
                        <View
                            key={ statb.stat.name + i }
                            style={{ marginRight: 10, flexDirection: 'row', justifyContent: 'space-between' }}
                        >
                        <Text style={{...styles.regularText, fontWeight: 'bold' }} >
                            { statb.stat.name }
                        </Text>
                        <Text style={styles.regularText} >
                            { statb.base_stat }
                        </Text>
                    </View>
                    ))
                }
            </View>
        </View>
        {/* Sprite final */}
        <View
            style={{
                marginVertical: 30,
                alignItems: 'center',
            }}
        >
            <FadeInImage
                uri={ fullPokemon.sprites.front_default }
                style={ styles.basicSprite }
            />
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },

    regularText: {
        fontSize: 19,
    },

    basicSprite: {
        width: 100,
        height: 100,
    },
});
